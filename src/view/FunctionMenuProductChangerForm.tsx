import {Formik} from "formik";
import {emptyProduct, Product} from "../interfaces";
import {getProductById, updateProduct} from "../api/ProductApi";
import {ProductForm} from "./ProductForm";
import {useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import {useParams} from "react-router-dom";

export function FunctionMenuProductChangerForm() {
    const [product, setProduct] = useState(emptyProduct);
    const [isLoad, setLoad] = useState(false);
    let {id} = useParams();

    useEffect(() => {
            if (id !== undefined && !isLoad) {
                getProductById(id)
                    .then((pr: AxiosResponse<Product>) => {
                        if (pr.data !== undefined) {
                            setProduct(pr.data)
                            setLoad(true);
                        }
                    })
            }
        }, [product]
    );

    return (
        <div className="row justify-content-center">
            <div className="container-fluid m-2"
                 style={{maxWidth: "50rem"}}>
                <Formik initialValues={product}
                        onSubmit={(values: Product) => {
                            updateProduct(values, product.id).then(r => {
                                if (r.status === 200) {
                                    console.log(values)
                                    console.log(r.data)
                                }
                            })
                        }}>
                    <ProductForm product={product}/>
                </Formik>
            </div>
        </div>
    )
}