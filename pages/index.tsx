// import { BlogPost } from '@/@types/schema'
// import NotionService from '@/services/notion-service'
// import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage, PreviewData } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import { title } from 'process'
// import { ParsedUrlQuery } from 'querystring'

// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) =>{
//   const notionService = new NotionService();

//   const posts = await notionService.getPublishedBlogPosts();

//   return {
//     props:{
//       posts
//     },
//   }
// }


// const Home: NextPage = ({posts}: InferGetStaticPropsType<typeof getStaticProps>) => {
//   const title = 'Test Blog'
//   const description = 'Welcome to my Notion Blog'

//   return(
//     <>
//     <Head>
//       <title>{title}</title> 
//       <meta name={"description"} title={"description"} content = {description} />
//     </Head>
    
//     <main className="min-h-screen">
//       <div className='max-w-5xl mx-auto'>
//         <div className='flex items-center justify-center'>
//           <h1 className='font-extrabold text-xl md:text-4xl text-black text-center'>NotionBlog</h1>
//         </div>
//         {
//           posts.map((post:BlogPost)=>(
//             <p key={post.id}>Blog Post component will go here:{post.title}</p>
//           ))
//         }
//       </div>
//     </main>
//     </>
//   )
// }

// export default Home 

 
import {GetStaticProps, InferGetStaticPropsType} from "next";
import Head from "next/head";
import {BlogPost} from "../@types/schema";
// import BlogCard from "../components/BlogCard";
import NotionService from "../services/notion-service";

export const getStaticProps: GetStaticProps = async (context) => {
    const notionService = new NotionService();
    const posts = await notionService.getPublishedBlogPosts()

    return {
        props: {
            posts
        },
    }
}

const Home = ({posts}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const title = 'Test Blog';
    const description = 'Welcome to my Notion Blog.'

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={"description"} title={"description"} content={description}/>
              
            </Head>

            <div className="min-h-screen">
                <main className="max-w-5xl mx-auto relative">
                    <div className="h-full pt-4 pb-16 mx-auto">
                        <div className="flex items-center justify-center">
                            <h1 className="font-extrabold text-4xl text-black">Notion + NextJS Sample Blog</h1>
                        </div>
                        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
                             {
          posts.map((post:BlogPost)=>(
            <p key={post.id}>Blog Post component will go here:{post.title}</p>
          ))
        }

                        </div>
                    </div>
                </main>
            </div>
        </>
    )
};

export default Home;