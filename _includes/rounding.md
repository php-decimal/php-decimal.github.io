## Rounding

The default rounding mode defined as `Decimal::DEFAULT_ROUNDING` is [half-even](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even), which is also the default used by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point), [C#](https://docs.microsoft.com/en-us/dotnet/api/system.math.round#System_Math_Round_System_Decimal_), [Java](https://docs.oracle.com/javase/10/docs/api/java/math/RoundingMode.html), and [Python](https://docs.python.org/3/library/decimal.html#decimal.DefaultContext). However, [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round#Description) uses [half-up](https://en.wikipedia.org/wiki/Rounding#Round_half_up), and both [Ruby](https://ruby-doc.org/stdlib-2.1.1/libdoc/bigdecimal/rdoc/BigDecimal.html#method-c-mode) and [PHP](http://php.net/manual/en/function.round.php) use [half-away-from-zero](https://en.wikipedia.org/wiki/Rounding#Round_half_away_from_zero).

The reason for this default is **to prevent biasing the average** upwards or downwards.

[This stack exchange answer](https://mathematica.stackexchange.com/a/2120) provides some great examples for further reading.


### Rounding Modes

The default rounding mode can not be changed because it affects how values are reduced to a precision.
With a fixed internal rounding mode, an input value will always result in the same decimal value for a given precision,
regardless of the environment. However, some methods allow you to provide a rounding mode, which can be any of the following constants:
- `Decimal::ROUND_UP` (away from from)
- `Decimal::ROUND_DOWN` (towards zero)
- `Decimal::ROUND_CEILING` (towards positive infinity)
- `Decimal::ROUND_FLOOR` (towards negative infinity)
- `Decimal::ROUND_HALF_UP` (halfway ties away from zero)
- `Decimal::ROUND_HALF_DOWN` (halfway ties towards zero)
- `Decimal::ROUND_HALF_EVEN` (halfway ties to nearest even number)
- `Decimal::ROUND_HALF_ODD` (halfway ties to nearest odd number)
- `Decimal::ROUND_TRUNCATE` (no rounding)

You can also use the corresponding [PHP constants](http://php.net/manual/en/function.round.php).

### Rounding Methods

{% include method.md method=site.data.methods.floor %}
{% include method.md method=site.data.methods.ceil %}
{% include method.md method=site.data.methods.truncate %}
{% include method.md method=site.data.methods.round %}
{% include method.md method=site.data.methods.trim %}
{% include method.md method=site.data.methods.toFixed %}
