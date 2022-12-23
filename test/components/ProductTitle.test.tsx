import React from "react";
import renderer from "react-test-renderer";
import { ProductTitle, ProductCard } from "../../src/components";
import { product1 } from "../data/product";

describe('ProductTitle', () => { 
    test('should to show a title', () => { 
        const wrapper = renderer.create(
            <ProductTitle title="Custom Title" className="custom-class" />
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('should to show name product into the component', () => { 
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
