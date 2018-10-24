## Basic Usage {#basic-usage}

The `Decimal` class is under the `Decimal` namespace. This allows for future additions
to the project without affecting the global namespace. Alternatively, you can use the
[php-decimal/globals]() package which exposes a global `decimal` function as a shortcut to using the constructor.

{% highlight php %}
<?php
use Decimal\Decimal;
{% endhighlight %}
`Decimal` objects can be constructed using a `Decimal`, `string`, or `int` value,
and an optional precision which defaults to **28**.

Special `float` values are also supported (`NAN`, `INF` and `-INF`), but `float`
is otherwise not a valid argument in order to avoid the possibility of accidentially using a `float`.
If you absolutely must use a `float` to construct a decimal you can cast it to a `string` first,
but doing so relies on the "precision" setting in the *.ini*. This library recommends that projects
using it avoid `float` entirely, wherever possible. Use `Decimal` instances instead of `float` and use
a `string` to export the value.

A warning will be raised if a `string` or `int` argument was not parsed completely. For example: `"0.135"`
to a precision of 2 will result in `"0.14"` with a warning. Similarly, `123` with a precision of 2
would result in `120` with a warning.

{% highlight php %}
use Decimal\Decimal;

/**
 * Create a decimal with value "0.1" and a precision of 28 significant places.
 */
$decimal = new Decimal("0.1");

/**
 * Create a decimal with value "0.1" and a precision of 36 significant places.
 */
$decimal = new Decimal("0.1", 36);

{% endhighlight %}

Arithmetic operations will create a new instance using the maximum precision of the operands.
The result is therefore accurate up to `MAX($a->precision(), $b->precision())` significant places,
subject to rounding of the last digit.

{% highlight php %}
use Decimal\Decimal;

$a = new Decimal("1", 2);
$b = new Decimal("7", 8);

print_r($a->div($b));
{% endhighlight %}

{% highlight text %}
Decimal\Decimal Object
(
    [value] => 0.14285714
    [precision] => 8
)
{% endhighlight %}

Scalar operands are equivalent to `new Decimal($operand)`, but avoid the need to
construct an object for the operation. The value is parsed internally and the
result of the calculation is written to the resulting instance.

{% highlight php %}
use Decimal\Decimal;

$a = new Decimal("0.1", 4);
$b = new Decimal("0.2", 4);
$c = $a + $b;

print_r($c);
print_r($c / 3);
{% endhighlight %}

{% highlight text %}
Decimal\Decimal Object
(
    [value] => 0.3
    [precision] => 4
)
Decimal\Decimal Object
(
    [value] => 0.1
    [precision] => 28
)
{% endhighlight %}
