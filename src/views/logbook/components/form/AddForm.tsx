import { memo, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { Button, Box, Typography, TextField, Divider, Checkbox, FormControlLabel, InputAdornment, FormControl, Select, MenuItem, } from "@mui/material";
import { SchemaForm, InitialValue } from "./schema/SchemaForm";
import FormErrorMessage from "../FormErrorMessage";

interface Props {
    onSubmit: (values: any) => void;
    onReset: (values: any) => void;
}

export const AddForm = ({ onSubmit, onReset }: Props) => {

    return (
        <Box sx={{ p: "16px 20px" }}>
            <Formik
                enableReinitialize={false}
                initialValues={InitialValue}
                validationSchema={SchemaForm}
                onSubmit={(values) => {
                    onSubmit(values)
                }}
                onReset={(values) => onReset(values)}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    handleBlur,
                    touched,
                }) => (
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleSubmit(e)
                        }}
                    >
                        <>
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: 500, color: "#555555", m: "0 0 5px" }}
                            >
                                Nombre
                            </Typography>
                            <TextField
                                inputProps={{ maxLength: 155 }}
                                fullWidth
                                name="name_object"
                                autoComplete="off"
                                type="text"
                                autoFocus
                                onChange={handleChange}
                                value={values.name_object}
                                size="small"
                                helperText="El nombre asignado a la aplicación debe ser único"
                            />
                            <FormErrorMessage nameField={"name_object"} error={errors} touched={touched} />
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: 500, color: "#555555", m: "15px 0 5px" }}
                            >
                                Texto a mostrar
                            </Typography>
                            <TextField
                                inputProps={{ maxLength: 155 }}
                                fullWidth
                                name="label_value"
                                type="text"
                                autoComplete="off"
                                onChange={handleChange}
                                value={values.label_value}
                                size="small"
                                helperText="Texto a desplegar en la pantalla USSD"
                            />
                            <FormErrorMessage nameField={"label_value"} error={errors}
                                touched={touched}
                            />
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: 500, color: "#555555", m: "15px 0 5px" }}
                            >
                                Dirección
                            </Typography>
                            <TextField
                                inputProps={{ maxLength: 155 }}
                                fullWidth
                                name="ruta_value"
                                type="text"
                                autoComplete="off"
                                onChange={handleChange}
                                value={values.ruta_value}
                                size="small"
                                helperText="La dirección de la aplicación debe comenzar con el texto /script/"
                            />
                            <FormErrorMessage nameField={"ruta_value"} error={errors} touched={touched} />
                        </>

                        <Divider />
                        <Box
                            component="div"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    color: "white",
                                    backgroundImage:
                                        "-webkit-linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5)",
                                    padding: "8px 12px",
                                    textTransform: "none",
                                }}
                            >
                                Guardar
                            </Button>
                            <Button
                                type="reset"
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    ml: 1,
                                    textTransform: "none",
                                    color: "white",
                                    bgcolor: "#27293d",
                                    boxShadow: "none",
                                    borderWidth: "2px",
                                    padding: "8px 12px",
                                    border: "1px solid rgba(0, 0, 0, 0.1)",
                                    ":hover": {
                                        bgcolor: "#27293d",
                                        border: "1px solid gray",
                                        boxShadow: "none",
                                    },
                                }}
                            >
                                Cancelar
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box >
    );
};

