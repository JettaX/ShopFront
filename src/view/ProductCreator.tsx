import {Field, Form, Formik} from "formik";
import {emptyProduct, newProduct} from "../interfaces";
import {apiCreateProduct} from "../api/ProductApi";
import {ProductForm} from "./ProductForm";

export function ProductCreator() {
    return (
        <div className="row justify-content-center">
            <div className="container-fluid m-2"
                 style={{maxWidth: "50rem"}}>
                <Formik initialValues={emptyProduct}
                        onSubmit={(values: newProduct) => {
                            apiCreateProduct(values).then(r => {
                                if (r.status === 200) {
                                    console.log(values)
                                    console.log(r.data)
                                }
                            })
                        }}>
                    <ProductForm product={emptyProduct}/>
                </Formik>
            </div>
        </div>
    )
}