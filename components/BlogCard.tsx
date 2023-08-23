
import { FunctionComponent } from "react";
import Link from "next/link";
import { BlogPost } from "../@types/schema";
import dayjs from 'dayjs'

type BlogCardProps = {
    post: BlogPost
}

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat)

const BlogCard: FunctionComponent<BlogCardProps> = ({ post }) => {
    return (
        <Link href={`/post/${post.slug}`}>
            <a className="transition duration-300 hover:scale-105 block max-w-xs mx-auto">
                <div key={post.title} className="rounded-xl shadow-lg overflow-hidden h-full">
                    <div className="flex-shrink-0">
                        <img className="h-40 w-full object-cover" src={post.cover} alt="" />
                    </div>
                    <div className="bg-gray-50 pt-2 pb-6 px-4 flex flex-col justify-between h-full">
                        <div>
                            <span className="block mt-2">
                                <h4 className="text-xs font-medium text-gray-600">{dayjs(post.date).format('LL')}</h4>
                            </span>
                            <span className="block mt-2">
                                <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                            </span>

                            <span className="block mt-2">
                                <p className="text-sm text-gray-600">{post.description}</p>
                            </span>

                            <span className="block mt-2 space-x-2">
                                {
                                    post.category.map(category => (
                                        <span key={category.id} className='bg-green-300 text-green-800 px-2 py-1 text-xs rounded-lg'>
                                            #{category.name}
                                        </span>
                                    ))
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default BlogCard;



  



