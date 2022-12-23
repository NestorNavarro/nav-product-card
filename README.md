## Nav-Product-Card

This is an test package


## Ejemplo
```
import { ProductCard } from "nav-product-card";
```

```
<ProductCard 
    product={product}
    initialValues={{
        count : 4,
        maxCount : 10,
    }}
>
    {
        ({ 
            reset, 
            count, 
            increaseBy, 
            isMaxCountReached 
        }) => (
            <>
                <ProductCard.Image />
                <ProductCard.Title />
                <ProductCard.Buttons />
            </>
        )
    }
</ProductCard>
```