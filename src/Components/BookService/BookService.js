import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const BookService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://prantik-traveller-server.vercel.app/users", data)

      .then((res) => {
        if (res.data.insertedId) {
          alert("Added Successfully To You");
          reset();
        }
      });
  };
  return (
    <div>
      <h2 className=" text-3xl font-medium">Hlw Traveler Book Your Service</h2>

      <form
        className=" grid flex-col m-4 justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className=" border-2 border-sky-800 mb-5 w-96  rounded-lg px-2"
          {...register("name")}
          placeholder="Country name"
        />
        <textarea
          className=" border-2 border-sky-800 mb-5 w-96 rounded-lg px-2"
          {...register("description")}
          placeholder="Description"
        />
        <input
          className=" border-2 border-sky-800 mb-5 w-96 rounded-lg px-2 "
          type="number"
          {...register("prcie")}
          placeholder="Price"
        />
        <input
          className=" border-2 border-sky-800 mb-5 w-96 rounded-lg px-2"
          {...register("img")}
          placeholder="Image URL"
        />
        <input className=" border-2 border-red-700 w-96" type="submit" />
      </form>
    </div>
  );
};

export default BookService;
