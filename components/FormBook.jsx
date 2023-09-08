import useFormData from "@/hooks/useFormData";
import React from "react";
import Input from "./Input";

const FormBook = ({defaultData}) => {
  const { form, formData, updateFormData } = useFormData();
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className='w-full flex items-center justify-center'>
      <form
        className=' w-2/4 rounded-md px-4 py-3 bg-[#3333] '
        ref={form}
        onChange={updateFormData}
        onSubmit={handleSubmit}
      >
        <Input
          type={"text"}
          name={"title"}
          label={"titulo del libro"}
          required
        />
        <Input type={"text"} name={"author"} label={"Autor"} required />
        <Input
          type={"number"}
          name={"publicationDate"}
          label={"Año de publicacion"}
        />
        <Input type={"text"} name={"synopsis"} label={"Sinopsis"} />
        <Input type={"text"} name={"genre"} label={"Genero"} />
        <Input type={"text"} name={"publisher"} label={"Editorial"} />
        <Input type={"number"} name={"quantity"} label={"Cantidad"} />

        <button className='block mx-auto my-3 px-2 text-white py-1 rounded-md border shadow-md hover:bg-[#ff4a93]'>
          Save
        </button>
      </form>
    </div>
  );
};

export default FormBook;
