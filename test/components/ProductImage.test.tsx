import React from "react";
import renderer from "react-test-renderer";
import { ProductCard, ProductImage } from "../../src/components";
import { product2 } from "../data/product";

describe('ProductImg', () => { 
    test('should to show a img prop', () => { 
        const wrapper = renderer.create(
            <ProductImage img="https://test.jpg" />
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('should to show img product into the component', () => { 
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
