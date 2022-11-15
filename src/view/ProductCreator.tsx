import {Field, Form, Formik} from "formik";
import {createProduct} from "../api/api";
import {newProduct} from "../interfaces";
import {CatalogCard} from "./CatalogCard";

export function ProductCreator() {
    return (
        <div className="row justify-content-center">
            <div className="container-fluid m-2"
                 style={{maxWidth: "50rem"}}>
                <Formik initialValues={{
                    name: "",
                    description: "",
                    price: 0,
                    image: "",
                }}
                        onSubmit={(values: newProduct) => {
                            createProduct(values).then(r => {
                                if (r.status === 200) {
                                    console.log(values)
                                    console.log(r.data)
                                }
                            })
                        }}>
                    <Form className="row g-3">
                        <div className="col-md-6">
                            <Field as="label" htmlFor="title" className="form-label">title</Field>
                            <Field as="input" name="name" type="text" className="form-control" id="title"
                                   required={true}/>
                        </div>
                        <div className="col-md-6">
                            <Field as="label" htmlFor="price" className="form-label">price</Field>
                            <Field as="input" name="price" type="number" className="form-control" id="price"
                                   required={true}/>
                        </div>
                        <div className="col-12">
                            <Field as="label" htmlFor="description" className="form-label">Description</Field>
                            <Field as="textarea" name="description" className="form-control" id="description"
                                   required={true}/>
                        </div>
                        <div className="col-12">
                            <Field as="label" htmlFor="image" className="form-label">Image URL</Field>
                            <Field as="input" name="image" type="text" className="form-control" id="image"
                                   required={true}/>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">save</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}