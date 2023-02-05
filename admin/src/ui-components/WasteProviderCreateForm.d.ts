/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WasteProviderCreateFormInputValues = {
    name?: string;
    image?: string;
    deliveryFee?: number;
    minDeliveryTime?: number;
    maxDeliveryTime?: number;
    rating?: number;
    address?: string;
    lat?: number;
    lng?: number;
};
export declare type WasteProviderCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    deliveryFee?: ValidationFunction<number>;
    minDeliveryTime?: ValidationFunction<number>;
    maxDeliveryTime?: ValidationFunction<number>;
    rating?: ValidationFunction<number>;
    address?: ValidationFunction<string>;
    lat?: ValidationFunction<number>;
    lng?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WasteProviderCreateFormOverridesProps = {
    WasteProviderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryFee?: PrimitiveOverrideProps<TextFieldProps>;
    minDeliveryTime?: PrimitiveOverrideProps<TextFieldProps>;
    maxDeliveryTime?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    lng?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WasteProviderCreateFormProps = React.PropsWithChildren<{
    overrides?: WasteProviderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WasteProviderCreateFormInputValues) => WasteProviderCreateFormInputValues;
    onSuccess?: (fields: WasteProviderCreateFormInputValues) => void;
    onError?: (fields: WasteProviderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WasteProviderCreateFormInputValues) => WasteProviderCreateFormInputValues;
    onValidate?: WasteProviderCreateFormValidationValues;
} & React.CSSProperties>;
export default function WasteProviderCreateForm(props: WasteProviderCreateFormProps): React.ReactElement;
