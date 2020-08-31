import React, { InputHTMLAttributes } from 'react';
import {useField} from 'formik';
import { FormControl, FormLabel, Input, FormErrorMessage, Box, Button } from '@chakra-ui/core';



type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name : string;
    label : string;
    placeholder : string;
    type? : string;
}

export const InputField : React.FC<InputFieldProps> = (props) => {
    const [field, {error, }] = useField(props);

   return (      
       <FormControl isInvalid={!!error}>
           <Box mt={4}>
           <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
           <Input {...field} id={field.name} placeholder={props.placeholder} type={props.type}></Input>
           { error ? <FormErrorMessage>{error}</FormErrorMessage> : null } 
           </Box>
           

       </FormControl>
   )
}