import { ResolvingMetadata } from "next";

type Props = {
    params: Promise<{
        id: string;
    }>;
}


async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
        {next: {
                revalidate: 60,
               }
        }
    );
    if (!response.ok) {
        throw new Error('Сетевая ошибка' + response.status)
    }
    return response.json(); 
}



// export async function generateMetadata({params}: Props, parent: ResolvingMetadata) {
//     const {id} = await params;   
//     const post = await getData(id);
//     const previousKeywords = (await parent).keywords || [];
//     console.log(previousKeywords);
//     return {
//         title: post.title,
//         description: 'lalalageneratemetadata',
//         keywords: []
//     }
// }



export default async function Post({params}: Props) {
    const {id} = await params;
    console.log(id);  
    const post = await getData(id);
    console.log(post);  
    return <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    </>
}

