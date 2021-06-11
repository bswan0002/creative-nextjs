import React from "react";

const Form = ({ children, ...attributes }) => (
  <form
    className="flex flex-col max-w-md p-4 m-4 mx-auto border border-gray-500 rounded-xl"
    {...attributes}
  >
    {children}
  </form>
);

const FormHeader = ({ children }) => (
  <h2 className="text-center">{children}</h2>
);

const FormGroup = ({ children }) => (
  <div className="flex flex-col mb-4">{children}</div>
);

const Label = ({ children, ...attributes }) => (
  <label className="mb-2" {...attributes}>
    {children}
  </label>
);

const Input = React.forwardRef(({ ...attributes }, ref) => (
  <input className="bg-gray-200" {...attributes} ref={ref} />
));

const Button = ({ children, ...attributes }) => (
  <button
    className="border border-gray-500 rounded focus:bg-gray-100 hover:bg-gray-100"
    {...attributes}
  >
    {children}
  </button>
);

const Error = ({ children }) => (
  <div className="p-2 my-4 text-center text-red-900 bg-red-300 rounded">
    {children}
  </div>
);

const Message = ({ children }) => (
  <div className="p-2 my-4 text-center text-green-900 bg-green-300 rounded">
    {children}
  </div>
);

export { Form, FormHeader, FormGroup, Label, Input, Button, Error, Message };
