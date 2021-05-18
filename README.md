![example](https://raw.githubusercontent.com/uzaysan/react-native-mention-hashtag-text/main/screenshot.jpg)

# Install

    npm i react-native-mention-hashtag-text

# Usage

    import  MentionHashtagTextView  from  "react-native-mention-hashtag-text";

    const mentionHashtagClick = (text) => {
        console.log("Clicked to + " + text);
    };

    <MentionHashtagTextView
        mentionHashtagPress={mentionHashtagClick}
        mentionHashtagColor={"#ff0000"}
        >
        This is a text with a @mention and #hashtag. You can add more @mentions like @john @foe or #hashtags like #ReactNative
    </MentionHashtagTextView>

## Props

| Props               | Params                | Description                                                       |
| ------------------- | --------------------- | ----------------------------------------------------------------- |
| mentionHashtagPress | (void) (string) => {} | Triggered when user clicked a hashtag or mention.                 |
| mentionHashtagColor | (String) Color        | Mention and hashtag color. Uses #0384BE (light blue) for default. |

## License

ISC License (ISC)
Copyright 2021 @uzaysan

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
