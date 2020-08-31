import React from 'react';
import {Form, Formik} from 'formik';
import {FormControl, Button} from "@chakra-ui/core/dist";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import FormErrorMessage from "@chakra-ui/core/dist/FormErrorMessage";
import Input from "@chakra-ui/core/dist/Input";
import {Wrapper} from "../components/Wrapper";
import { InputField } from '../components/InputField';

interface registerProps {

}


const Register  : React.FC<registerProps> = ({}) => {
    return (
        <Wrapper variant ="small">
        <Formik
 initialValues={{username : "", password: ""}} onSubmit={(values) => {console.log(values)}}>
    {({isSubmitting}) => (

        <Form>
      <InputField name="username" placeholder="username" label="Username"/>
      <InputField name="password" placeholder="password" label="Password" type="password"/>
      <Button type='submit' variantColor="teal" mt={4} isLoading={isSubmitting}>Register</Button>
        </Form>
    )}
</Formik>
        </Wrapper>
    )

};


export default Register;
