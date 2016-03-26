# &lt;juicy-decomposer&gt;

> Custom Element to de-compose elements according to JSON setup.

Element will extract from child nodes marked in `setup` its child nodes, to this element.
Simply it 'moves' grandchildren 'level' up to become children.
Setup may work recursively.

The element track attribute changes as well as child nodes mutations gently.

## Demo

[Check it live!](http://Juicy.github.io/juicy-decomposer)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install juicy-decomposer --save
```

Or [download as ZIP](https://github.com/Juicy/juicy-decomposer/archive/master.zip).

## Usage

1. Import polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
    ```

2. Import custom element:

    ```html
    <link rel="import" href="bower_components/juicy-decomposer/juicy-decomposer.html">
    ```

3. Start using it!

    ```html
    <juicy-decomposer setup='{"0": true, "0/1": true}'>
        <div>
            <div>0/0</div>
            <div>
                <div>0/1/0</div>
                <div>0/1/1</div>
                <div>0/1/2</div>
            </div>
            <div>0/2</div>
        </div>
        <div>
            <div>1/0</div>
            <div>1/1</div>
            <div>1/2</div>
        </div>
    </juicy-decomposer>
    ```
    will become
    ```html
    <juicy-decomposer setup='{"0": true, "0/1": true}'>
        <div hidden></div>
        <div>0/0</div>
        <div hidden></div>
        <div>0/1/0</div>
        <div>0/1/1</div>
        <div>0/1/2</div>
        <div>0/2</div>
        <div>
            <div>1/0</div>
            <div>1/1</div>
            <div>1/2</div>
        </div>
    </juicy-decomposer>
    ```

## Options

Attribute     | Options     | Default      | Description
---           | ---         | ---          | ---
`setup`       | *JSON*      | `{}`         | map of element to explode

## Methods

Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---

## Events

Event         | Description
---           | ---

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

1. Install [bower](http://bower.io/) & [polyserve](https://npmjs.com/polyserve):

    ```sh
    $ npm install -g bower polyserve
    ```

2. Install local dependencies:

    ```sh
    $ bower install
    ```

3. Start development server and open `http://localhost:8080/components/juicy-decomposer/`.

    ```sh
    $ polyserve
    ```

## History

For detailed changelog, check [Releases](https://github.com/Juicy/juicy-decomposer/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
