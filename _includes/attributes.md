## Attributes


### Precision

Precision defines **the number of significant figures that a decimal is accurate to**. For example, a number like `1.23E-200` is very small but only has 3 significant figures. PHP decimal uses a default precision of `28` and does not take the *precision* setting in the *.ini* into account (which is for converting `float` to string). Increasing the precision will require more memory and might impact runtime significantly for operations like `pow` and `div` when using a very high precision.

Decimal operations, casting and construction **will always preserve precision** to avoid data loss:
- You can't reduce the precision of a decimal.
- You can't change the value of a decimal after it has been calculated.
- Constructing a decimal using a decimal will preserve the given decimal's precision.

For example:
```php
$a = new Decimal("0.1", 50);

$b = new Decimal($a);     // Precision is 50
$c = new Decimal($b, 6);  // Precision is 50
$d = new Decimal($c, 64); // Precision is 64
```

Arithmetic operations will result in a new decimal using the maximum precision of all operands. The developer's only responsibility is to define the precision (as a minimum) when constructing a decimal. For example, if you have a `DECIMAL(20,6)` column in your database (precision is 20, scale is 6), you would create a decimal instance using 20 for the precision and be assured that all calculations will use and result in a precision of at least 20. When the value is to be written back to the database, you would use `$decimal->toFixed(6)` to produce a string rounded accurately to 6 decimal places to match the scale of the SQL data type.

There are three precision constants:
- `Decimal::MIN_PRECISION`
- `Decimal::MAX_PRECISION`
- `Decimal::DEFAULT_PRECISION`

{% include method.md method=site.data.methods.precision %}


### Special Numbers

There are 3 special numbers: `INF`, `-INF` and `NAN`. These correspond to the same `float` value constants in PHP. All comparison and arithmetic using these values
match the behaviour of PHP `float` values wherever possible, and any case that does not do so is considered a bug.

{% include method.md method=site.data.methods.isNaN %}
{% include method.md method=site.data.methods.isInf %}


### Integers
{% include method.md method=site.data.methods.isInteger %}
{% include method.md method=site.data.methods.isZero %}


### Sign
{% include method.md method=site.data.methods.abs %}
{% include method.md method=site.data.methods.negate %}
{% include method.md method=site.data.methods.signum %}
{% include method.md method=site.data.methods.isPositive %}
{% include method.md method=site.data.methods.isNegative %}


### Parity
{% include method.md method=site.data.methods.parity %}
{% include method.md method=site.data.methods.isEven %}
{% include method.md method=site.data.methods.isOdd %}
