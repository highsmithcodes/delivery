import DateFormatter from "./DateFormatter";
import Image from "next/image";
import Link from "next/link";

type Items = {
  [key: string]: string;
};

export default function PostPreview({ post }: { post: Items }) {
  return (
    <div className="w-full mx-auto group">
     
=      <Link href={`/posts/${post.slug}`} className="group relative">
        <Image
          alt={`cover image for ${post.title}`}
          src={post.coverImage}
          width={400}
          height={400}
          style={{ width: "100%" }}
        />
           <div className="mt-4 flex justify-between">
              <div>
          <p className="font-semibold text-xl group-hover:underline text-black">
            {post.title}
          </p>
          <DateFormatter dateString={post.date} />
          <p className="text-sm font-medium text-gray-900">{post.excerpt}</p>
        </div><p className="text-sm font-medium text-gray-900">{post.price}</p></div>
      </Link>
    </div>
  );
}
