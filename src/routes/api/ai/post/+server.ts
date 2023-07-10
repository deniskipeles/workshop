import { pb } from '$lib/pocketbase';
import { serializeNonPOJOs } from '$lib/tools';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, fetch, url, locals: { company, user } }) {
    try {
        let data = await request.json();
        // let context = ((await getAIContext(data?.target)) + ". If prices are involve they should be in kenya shillings.") + company?.ai_description
        // console.log(context)
        let u = 'anonymous-user'
        if (user) {
            const { id, email, username, name } = user
            u = JSON.stringify({
                id, name, username, email
            })
        }
        data = {
            ...data,
            user: u,
            conversation_id: "c_1f04f704a788e6e4",
            // rules: context,
            site: url.origin
        }



        const response = await fetch("http://127.0.0.1:5000/api/ai", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json",
            },
        }).then(async (res) => await res.json());
        console.log(response)

        // try {
        //     const ai_input = {
        //         "conversation_id": data?.conversation_id,
        //         "target_resource": data?.target,
        //         "question": data?.question,
        //         "answer": response?.answer,
        //         "user_id": user?.id
        //     };
        //     const record = await pb.collection('ai_conversations').create(ai_input);
        // } catch (error) { }

        return json({ success: true, data: response });
    } catch (error: any) {
        console.log(error)
        error = serializeNonPOJOs(error)
        return json({ success: false, error });
    }
}


const getAIContext = async (target: string) => {
    let instruction = 'Strictly response with context in electrical and plumping answer or warn that the question is not related to context.'
    try {
        let ai_controls = await pb.collection('ai_controls').getFullList({
            sort: '-created',
        });
        ai_controls = serializeNonPOJOs(ai_controls)
        if (target == 'add-products') {
            let products = await pb.collection('products').getFullList({
                sort: '-created',
            });
            let products_instructions = ai_controls.find(obj => obj?.key == target)
            const arr = products.map(obj => {
                let { name, price, available, discount, colors, material } = obj
                return { name, price, available, discount, colors, material }
            })
            instruction = `What else can i add? Given the already existing products: ${JSON.stringify(arr)} and the rules in which the response
             should follow/adhere. rules: ${products_instructions?.instructions + (
                    products_instructions?.structure ? (JSON.stringify(products_instructions?.structure)) : ''
                )}.`
        } else if (target == 'products-to-buy') {
            let products = await pb.collection('products').getFullList({
                sort: '-created',
            });
            let products_instructions = ai_controls.find(obj => obj?.key == target)
            const arr = products.map(obj => {
                let { name, price, available, discount, colors, material } = obj
                return { name, price, available, discount, colors, material }
            })
            instruction = `Given the products: ${JSON.stringify(arr)} and the rules in which the response
             should follow/adhere. rules: ${products_instructions?.instructions + (
                    products_instructions?.structure ? (JSON.stringify(products_instructions?.structure)) : ''
                )}. `
        } else if (target == 'services') {
            let services = await pb.collection('retrieve_services').getFullList({
                sort: '-created',
            });
            let services_instructions = ai_controls.find(obj => obj?.key == target)
            const arr = services.map(obj => {
                let { name, description, price, available, expand } = obj
                return { name, description, price, available, expand }
            })
            instruction = `Given the following service splecialist: ${JSON.stringify(arr)} and the rules in which the response
             should follow/adhere. rules: ${services_instructions?.instructions + (
                    services_instructions?.structure ? (JSON.stringify(services_instructions?.structure)) : ''
                )}. `
        } else if (target == 'job-requirements-advice') {
            let products = await pb.collection('products').getFullList({
                sort: '-created',
            });
            let instructions = ai_controls.find(obj => obj?.key == target)
            const arr = products.map(obj => {
                let { name, price, available, discount, colors, material } = obj
                return { name, price, available, discount, colors, material }
            })
            instruction = `Given the products: ${JSON.stringify(arr)} and the rules in which the response
             should follow/adhere. rules: ${instructions?.instructions + (
                    instructions?.structure ? (JSON.stringify(instructions?.structure)) : ''
                )}. `
        } else if (target == 'job-requirements') {
            let products = await pb.collection('products').getFullList({
                sort: '-created',
            });
            let products_instructions = ai_controls.find(obj => obj?.key == target)
            const arr = products.map(obj => {
                let { name, price, available, discount, colors, material } = obj
                return { name, price, available, discount, colors, material }
            })
            instruction = `Given the products: ${JSON.stringify(arr)} and the rules in which the response
             should follow/adhere. rules: ${products_instructions?.instructions + (
                    products_instructions?.structure ? (JSON.stringify(products_instructions?.structure)) : ''
                )}. `
        } else {
            let products = await pb.collection('products').getFullList({
                sort: '-created',
            });
            let services = await pb.collection('retrieve_services').getFullList({
                sort: '-created'
            });
            instruction = `
            Given the products: ${JSON.stringify(products)}.
            Given the services: ${JSON.stringify(services)}.
            and the rules are no code is to be included in our response. Only pure text is required.
             Do not reiterate/mention the applied rules in our response.`
        }

    } catch (error) {
        console.log(error)
    }
    return instruction
}