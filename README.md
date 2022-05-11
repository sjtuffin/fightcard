# Fight Card

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Usage

To compile and preview the demo, run:

```
ng server --configuration production
```

Unit tests are available and can be run with:

```
ng test
```

## Implementation Notes

* Assume fight card component is part of a larger UI, so extract models and services to a `/common` directory.

* Dots have subtle active state on the component guide (18px instead of 10px, at 0.2 opacity).

* Ignore clipping of whyte's arm on the component guide - both prototypes show image

* Time animation -  opacity (0.5-1)
                    animation-timing-function: ease-out;
                    animation-duration: 600ms;

* Name animation -  surname font size and line height (30,36 - 35,42)
                    otherwise opacity (0.5 - 1)
                    animation-timing-function: ease-out;
                    animation-duration: 300ms;
                   
* Dot/Image animation - animations only specified for interactive elements.
                    appears in keeping with time on mobile prototype (600ms, ease-out). 

---

The ARIA `tab` role for interactive time and name buttons, seems most appropriate for underlying HTML markup.

Both need be within a `tablist` and the associated image as the `tabpanel`.

On desktop the line could be seen as a `<hr>` element, but doesn't fit with mobile so assume only decorative. Will remove semantic meaning though add element so more obvious where this aesthetic comes from.