import React from 'react';
import { screen, fireEvent, getByRole, getByText } from '@testing-library/react'
import { act } from "react-dom/test-utils";
import renderWithRouter from './renderWithRouter';
import App from '../App';
import Provider from '../context/Provider';
import '@testing-library/jest-dom';

describe('Verifica caminho completo', () => {
  // const useContextMock = (React.useContext = jest.fn());
  // useContextMock.mockReturnValue({ products: mockProducts });

  test('comprando a primeira garrafa de vinho', async () => {
    // https://stackoverflow.com/questions/66856814/react-jest-testing-error-object-of-usecontext-not-defined
    act(() => {
      renderWithRouter(<Provider><App /></Provider>);
    });
  
    // const test = screen.getByTestId("botao-adicionar-0")
    const test = getByRole("heading", {
      name: /produtos/i,
    });
    // const test = getByRole('button', {
    //   name: /adicionar/i,
    // })

    console.log(test);

    const {pathname} = location;
    console.log(pathname);
  });
});