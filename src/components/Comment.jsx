import IKImage from "./IKImage";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <IKImage
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">Jane Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, eos!
        </p>
      </div>
    </div>
  );
};

export default Comment;
