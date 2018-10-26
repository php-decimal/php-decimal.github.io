## Comparing

Decimal objects are equal if their numeric values are equal, **as well as their precision**. The only value that breaks this rule is `NAN`, which is not equal to anything else including itself. Precision is used as the tie-break in cases where the values are equal.

Decimal objects **can be compared to any other type** to determine equality or relative ordering. Non-decimal values will be converted to decimal first (using the maximum precision). In cases where the type is not supported or comparison is not defined (eg. a decimal compared to `"abc"`), the decimal is considered greater and an exception will **not** be thrown.

While decimal objects can not be constructed from a non-special `float`, they can be compared to `float`. This is done by implicitly converting the value to a string using the equivalent of a string cast. This conversion is affected by the *.ini* "precision" setting because an implicit cast should have the same behaviour as an explicit cast.

Decimal objects follow the standard PHP object conventions:
- Always `true`.
- Always greater than `NULL`.
- Identical (`===`) if they are the **same object, even if equal**.

There are two methods that you can use to compare:

{% include method.md method=site.data.methods.equals %}
{% include method.md method=site.data.methods.compareTo %}

### Operators

{:.comparison-table}
|-----------------+------------------------------+-------------------------------------------------|
| Method          |  Operators                   | Description                                     |
|:----------------|:-----------------------------|:------------------------------------------------|
| `compareTo`     | `<=>`, `<`, `<=`, `>`, `>=`  | Relative ordering, sorting.                     |
| `equals`        | `==`                         | Equality, equal precision.                      |
|                 | `===`                        | Identity, same exact object, even if equal.     |
|-----------------+------------------------------+-------------------------------------------------+
