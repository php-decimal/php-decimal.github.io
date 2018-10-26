## Basic Usage {#basic-usage}

The `Decimal` class is under the `Decimal` namespace.

`Decimal` objects can be constructed using a `Decimal`, `string`, or `int` value,
and an optional precision which defaults to **28**.

Special `float` values are also supported (`NAN`, `INF` and `-INF`), but `float`
is otherwise not a valid argument in order to avoid accidentially using a `float`.
If you absolutely must use a `float` to construct a decimal you can cast it to a `string` first,
but doing so if affected by the [precision](http://php.net/manual/en/ini.core.php#ini.precision) INI setting.

Projects using this extension should avoid `float` entirely, wherever possible. An example workflow is to store values as `DECIMAL` in the database, query them as `string`, parse to `Decimal`, perform calculations, and finally prepare for the database using [toFixed](#toFixed).

JSON conversions will automatically convert the decimal to `string` using all signficant figures.

A warning will be raised if value was not parsed completely. For example, `"0.135"` to a precision of `2` will result in `"0.14"` with a warning. Similarly, `123` with a precision of `2` would result in `120` with a warning because data has been lost.

`Decimal` is final and immutable. Arithmetic operations always return a new `Decimal` using the maximum precision of the object and the operands. The result is therefore accurate up to `MAX($this->precision(), $op1->precision(), ...)` significant figures, subject to rounding of the last digit.

For example:

```php
use Decimal\Decimal;

$a = new Decimal("1", 2);
$b = new Decimal("7", 8);

print_r($a / $b);
```

```txt
Decimal\Decimal Object
(
    [value] => 0.14285714
    [precision] => 8
)
```

Scalar operands inherit the precision of the `Decimal` operand, which avoids the need to
construct a new object for the operation. If a scalar operand must be parsed with a higher precision, you should construct a new `Decimal` with an explicit precision. The result of a decimal operation is always a `Decimal`.

For example:

```php
use Decimal\Decimal;

$op1 = new Decimal("0.1", 4);
$op2 = "0.123456789";

print_r($op1 + $op2);


use Decimal\Decimal;

/**
 * @param int $n The factorial to calculate, ie. $n!
 * @param int $p The precision to calculate the factorial to.
 *
 * @return Decimal
 */
function factorial(int $n, int $p = Decimal::DEFAULT_PRECISION): Decimal
{
    return $n < 2 ? new Decimal($n, $p) : $n * factorial($n - 1, $p);
}

echo factorial(10000, 32);
```

```
Warning: Loss of data on string conversion in ... on line 1
Decimal\Decimal Object
(
    [value] => 0.2235
    [precision] => 4
)
```
