---
layout: default
permalink: /
---

{{ site.data.project.title }} {#introduction}
============

[![Github](https://img.shields.io/badge/src-php--decimal-lightgrey.svg?style=flat-square&branch=master)](https://github.com/{{ site.data.project.github }}){:class="shield github"}
[![Build Status](https://img.shields.io/travis/{{ site.data.project.travis }}.svg?style=flat-square&branch=master)](https://travis-ci.org/{{ site.data.project.travis }}){:class="shield"}

{% include introduction.md %}
{% include installation.md %}
{% include basic-usage.md %}
{% include sandbox.md %}
{% include performance.md %}
{% include attributes.md %}
{% include rounding.md %}
{% include comparing.md %}
{% include converting.md %}
{% include arithmetic.md %}
