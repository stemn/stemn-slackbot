#!/bin/sh
SCHEMAS_FOLDER=schemas
INDEX_FILE="${SCHEMAS_FOLDER}/index.ts"

rm -rf $SCHEMAS_FOLDER
mkdir $SCHEMAS_FOLDER

INTERFACES='
  ./src/webhooks/install/IWebhookInstall.ts
'

for i in $INTERFACES; do
  FILENAME="$(basename "$i" | cut -d'.' -f1)"
  yarn quicktype \
    --src "$i" \
    -l schema \
    -o "$SCHEMAS_FOLDER/${FILENAME}.json"

  FILENAME_SCHEMA="${FILENAME}Schema"

  {
          echo "import * as ${FILENAME_SCHEMA} from './${FILENAME}.json';"
          echo "const ${FILENAME} = ${FILENAME_SCHEMA}.definitions.${FILENAME};"
          echo "export { ${FILENAME} };"
          echo ""
  } >> $INDEX_FILE

done
