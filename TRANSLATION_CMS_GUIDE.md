# Dynamic Translation Management with NetlifyCMS/DecapCMS

This configuration provides a dynamic solution for managing translation files that can grow and change over time.

## Features

### 1. **Dynamic Field Creation**
- **Simple Translations**: For flat key-value pairs (e.g., `"test": "hello"`)
- **Nested Translations**: For grouped translations (e.g., `"Index": { "title": "Welcome", "description": "..." }`)
- **Language Selection**: Dropdown to select the target language
- **Unlimited Growth**: Add, edit, and remove translation keys without modifying the CMS configuration

### 2. **Automatic JSON Structure Handling**
The custom JavaScript (`custom.js`) automatically transforms between:

**CMS Interface Structure** ↔ **JSON File Structure**

```yaml
# CMS Interface
simple_translations:
  - key: "teste"
    value: "ola"
nested_translations:
  - group: "Index"
    items:
      - key: "title"
        value: "Welcome"
      - key: "description" 
        value: "Test description"
```

```json
// Actual JSON File
{
  "teste": "ola",
  "Index": {
    "title": "Welcome",
    "description": "Test description"
  }
}
```

### 3. **File Structure Support**
Works with your existing translation files:
- `translations/en.json`
- `translations/de.json`
- `translations/en-AU.json`
- `translations/en-NZ.json`

## How to Use

### Adding Simple Translations
1. Go to **Translations** in your CMS
2. Edit a language file (or create a new one)
3. Under **Simple Translations**, click "Add simple translations"
4. Enter the key (e.g., `welcome_message`) and value (e.g., `Welcome!`)

### Adding Nested Translations
1. Under **Nested Translations**, click "Add nested translations"
2. Enter the **Group Name** (e.g., `Header`, `Footer`, `Navigation`)
3. Add translation items with their keys and values
4. This creates structure like `Header.title`, `Header.subtitle`, etc.

### Language Management
- Use the **Language Code** dropdown to specify which language file you're editing
- The system automatically saves to the correct file (`en.json`, `de.json`, etc.)

## Benefits

1. **No Configuration Changes Needed**: Add new translation keys without touching the CMS config
2. **Supports Complex Structures**: Handle both flat and nested translations
3. **Version Control Friendly**: Clean JSON output that works well with Git
4. **User-Friendly Interface**: Clear labeling and hints for content editors
5. **Validation**: Built-in validation for translation keys and structure
6. **Scalable**: Can handle any number of translation keys and nesting levels

## Example Workflow

1. **Developer** adds new features requiring translations
2. **Content Editor** opens CMS and navigates to Translations
3. **Content Editor** selects the language and adds new translation keys
4. **System** automatically generates proper JSON structure
5. **Application** uses the translations immediately

## Technical Implementation

- **Custom Format**: `translation-json` format handles the JSON transformation
- **Dynamic Fields**: List widgets with variable content
- **Language Support**: Configurable language options
- **Validation**: Key format validation and required field checks

This approach eliminates the need to modify the CMS configuration every time new translations are added, making it truly dynamic and maintainable.
