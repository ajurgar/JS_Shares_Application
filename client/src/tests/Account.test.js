import React from "react";
import Account from "../containers/Account";
import {render, fireEvent, waitFor} from '@testing-library/react';


describe("Account", () => {

    let container;
    beforeEach(() => {
        container = render(< Account />);
    });

    it("displays the banks details", () => {
        const containerValue = container.getByTestId("bankDetails")
        expect(containerValue.textContent).toEqual("Bank Details")
    })

    it("displays personal details", () => {
        const containerValue = container.getByTestId("personalDetails")
        expect(containerValue.textContent).toEqual("Personal Details")
    })
    it("displays client's name", () => {
        const containerValue = container.getByTestId("name")
        expect(containerValue.textContent).toEqual("Name: Ben Robert")
    })
    it("displays client's email", () => {
        const containerValue = container.getByTestId("email")
        expect(containerValue.textContent).toEqual("Email: BenRoberts@codeclan.com")
    })
    it("displays client's password", () => {
        const containerValue = container.getByTestId("password")
        expect(containerValue.textContent).toEqual("Password: ******  Change Password ")
    })
})

    
