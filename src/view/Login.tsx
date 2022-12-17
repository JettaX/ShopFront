import {Field, Form, Formik} from "formik";
import {useAuth} from "../auth/Auth";
import {useNavigate} from "react-router-dom";

interface loginInit {
    login: string,
    password: string,
}

export function Login() {
    let navigate = useNavigate();
    let auth = useAuth();

    let from = "/catalog";

    return (
        <Formik initialValues={{
            login: "",
            password: "",
        }}
                onSubmit={(values: loginInit) => {
                    auth.signin(values.login, values.password, () => {
                        console.log("login" + auth.user)
                        navigate(from, { replace: true});
                    })
                }}>
            <Form>
                <div className="w-100 d-flex justify-content-center">
                    <div className="w-50">
                        <div className="mb-3 row">
                            <Field as="label" htmlFor="login" className="col-sm-2 col-form-label">login</Field>
                            <div className="col-sm-10">
                                <Field as="input" type="text" name="login" className="form-control" id="login"
                                       required={true}/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <Field as="label" htmlFor="password" className="col-sm-2 col-form-label">Password</Field>
                            <div className="col-sm-10">
                                <Field as="input" name="password" type="password" className="form-control" id="password"
                                       required={true}/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}