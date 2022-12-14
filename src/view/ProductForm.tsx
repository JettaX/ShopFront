import {Field, Form} from "formik";
import {Product} from "../interfaces";

interface ProductFormProps {
    product: Product,
}

export function ProductForm(props: ProductFormProps) {
    return (
        <Form className="row g-3">
            <div className="col-md-3">
                <Field as="label" htmlFor="id" className="form-label">id</Field>
                <Field as="input" name="id" disabled={true} value={props.product.id} type="text" className="form-control" id="id"
                       required={true}/>
            </div>
            <div className="col-md-9">
                <Field as="label" htmlFor="title" className="form-label">title</Field>
                <Field as="input" name="name" type="text" className="form-control" id="title"
                       required={true}/>
            </div>
            <div className="col-md-12">
                <Field as="label" htmlFor="price" className="form-label">price</Field>
                <Field as="input" name="price"type="number" className="form-control" id="price"
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
    )
}