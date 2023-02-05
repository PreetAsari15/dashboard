/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BasketCreateFormInputValues = {};
export declare type BasketCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BasketCreateFormOverridesProps = {
    BasketCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type BasketCreateFormProps = React.PropsWithChildren<{
    overrides?: BasketCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BasketCreateFormInputValues) => BasketCreateFormInputValues;
    onSuccess?: (fields: BasketCreateFormInputValues) => void;
    onError?: (fields: BasketCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BasketCreateFormInputValues) => BasketCreateFormInputValues;
    onValidate?: BasketCreateFormValidationValues;
} & React.CSSProperties>;
export default function BasketCreateForm(props: BasketCreateFormProps): React.ReactElement;
