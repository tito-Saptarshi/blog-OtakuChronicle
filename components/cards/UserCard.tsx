interface Params {
  id: string;
  userId: string;
  heading: string;
  blogbody: string;
  wordCount: number;
}

const UserCard = ({ id, userId, heading, blogbody, wordCount }: Params) => {
  var bool = false;
  const truncateText = (text: string, numWords: number) => {
    const words = text.split(' ');
    if (words.length > numWords) {
      bool = true;
      return words.slice(0, numWords).join(' ') + '...';
    }
    return text;
  };

  const truncatedBlogbody = truncateText(blogbody, wordCount);

    return (
        <div className="px-5">
          <h2 className="text-4xl font-extrabold dark:text-white">
            {heading}
          </h2>
          <p className="my-4 text-lg text-gray-500">
           {truncatedBlogbody}
          </p>
          
          {bool?
            
            <a
            href={`/post/${id}`}
            className="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a> : <></>} 
        </div>
      );
};

export default UserCard;
