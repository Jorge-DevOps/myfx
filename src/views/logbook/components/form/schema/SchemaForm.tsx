import * as Yup from "yup";

export const SchemaListado = {
  name_object: Yup.string().required("Campo requerido").matches(/^[a-zA-Z0-9\s]*$/, "Ingrese solo letras y números"),
  label_value: Yup.string().required("Campo requerido").matches(/^[a-zA-Z0-9\s]*$/, "Ingrese solo letras y números"),
  ruta_value: Yup.string().required("Campo requerido").matches(/^[a-zA-Z0-9\s]*$/, "Ingrese solo letras y números"),
};

export const SchemaForm = Yup.object().shape(SchemaListado);
export interface ICreate {
  name_object: string;
  ruta_value: string;
  label_value: string;
  extra_1_value: string;
  extra_2_value: string;
  extra_3_value: string;
  extra_4_value: string;
  extra_5_value: string;
  id_object_copy: number;
  extras?: boolean;
}

export const InitialValue: ICreate = {
  name_object: "",
  label_value: "",
  ruta_value: "",
  extras: false,
  extra_1_value: "",
  extra_2_value: "",
  extra_3_value: "",
  extra_4_value: "",
  extra_5_value: "",
  id_object_copy: 0,
};
