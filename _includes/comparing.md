## Comparing

Decimals are considered equal if their canonical values are equal, **even if their precisions are not**. This is equivalent to comparing the string representation of two decimals, which is not affected by precision. The only value that breaks that rule is `NAN`, which is not equal to anything else including itself.

Decimal objects **can be compared to any other type** to determine equality or relative ordering. Non-decimal values will be converted to decimal first (using the maximum precision). In cases where the type is not supported or comparison is not defined (eg. a decimal compared to `"abc"`), the **decimal is considered greater** and an exception will **not** be thrown.

Decimals can't be constructed with a `float`, but can be compared to `float`. This is done by implicitly converting the value to a string using the equivalent of `(string)`. This conversion is affected by the *.ini* "precision" setting because an implicit cast should have the same behaviour as an explicit cast.

Decimal objects follow the standard PHP object conventions:
- Always `true`.
- Always greater than `NULL`.
- Decimals are only identical (`===`) if they are the **same object, even if equal**.

There are three methods that you can use to compare:

{% include method.md method=site.data.methods.equals %}
{% include method.md method=site.data.methods.equalsExactly %}
{% include method.md method=site.data.methods.compareTo %}

You can use `equalsExactly` to determine whether two decimals have the same value and precision. This is useful when you need to be sure that two decimals would yield the same result in a calculation. This is not the case when precision is not equal, because the precision might affect the outcome of the calculation.

