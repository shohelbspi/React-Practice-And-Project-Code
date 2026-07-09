import React from "react";
import { FaFacebook, FaYoutube, FaRegHeart } from "react-icons/fa";
import Button from "./Button";

export default function UserCard() {
  return (
    <div className="w-full shadow-2xl rounded-4xl overflow-hidden">
      <div className="w-full bg-blue-400 relative aspect-video">
        <img
          className="absolute h-full rounded-full aspect-square object-cover object-top left-1/2 -translate-x-1/2 translate-y-1/4 border-4 border-blue-400 p-1 bg-white"
          src="https://media.licdn.com/dms/image/v2/D5603AQFBKZptdAVvcA/profile-displayphoto-scale_400_400/B56Z7.uTpEGoAg-/0/1782390015494?e=1784764800&v=beta&t=FB-OwWCkav6iQFNAx1m8MqIv3tdqEjupVip2jxyr7vU"
          alt=""
        />
      </div>

      <div className="flex flex-col items-center pt-[6rem]">
        <h1>Shohel Hossain</h1>
        <p>Full Stack Software Developer</p>

        <div className="flex gap-3 text-3xl pt-4">
          <FaFacebook className="text-blue-500" />
          <FaYoutube className="text-red-500" />
          <FaYoutube className="text-[tomato]" />
          <FaYoutube className="text-red-500" />
        </div>
        <div className="flex gap-3 pt-3">
          <Button text="Join Now" />
          <Button text="Subscription" />
        </div>

        <div className="flex gap-[2rem] pt-4">
          <div className="flex text-xl items-center">
            <FaRegHeart className="" />
            <span>60k</span>
          </div>
          <div className="flex text-xl items-center">
            <FaRegHeart className="" />
            <span>60k</span>
          </div>
        
          <div className="flex text-xl items-center">
            <FaRegHeart className="" />
            <span>60k</span>
          </div>
        </div>
      </div>
    </div>
  );
}
