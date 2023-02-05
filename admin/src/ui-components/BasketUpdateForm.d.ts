/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Basket } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BasketUpdateFormInputValues = {};
export declare type BasketUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BasketUpdateFormOverridesProps = {
    BasketUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type BasketUpdateFormProps = React.PropsWithChildren<{
    overrides?: BasketUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    basket?: Basket;
    onSubmit?: (fields: BasketUpdateFormInputValues) => BasketUpdateFormInputValues;
    onSuccess?: (fields: BasketUpdateFormInputValues) => void;
    onError?: (fields: BasketUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BasketUpdateFormInputValues) => BasketUpdateFormInputValues;
    onValidate?: BasketUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BasketUpdateForm(props: BasketUpdateFormProps): React.ReactElement;
