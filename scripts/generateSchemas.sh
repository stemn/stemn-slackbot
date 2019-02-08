SCHEMAS_FOLDER=schemas
INDEX_FILE="${SCHEMAS_FOLDER}/index.ts"

mkdir -p $SCHEMAS_FOLDER

rm $INDEX_FILE

INTERFACES=(
  ./src/webhooks/install/IWebhookInstall.ts
)

for i in ${INTERFACES[@]}; do
  FILENAME="$(basename $i | cut -d'.' -f1)"
  yarn quicktype \
    --src $i \
    -l schema \
    -o "$SCHEMAS_FOLDER/${FILENAME}.json"

  FILENAME_SCHEMA="${FILENAME}Schema"

  echo "import * as ${FILENAME_SCHEMA} from './${FILENAME}.json';" >> $INDEX_FILE
  echo "const ${FILENAME} = ${FILENAME_SCHEMA}.definitions.${FILENAME};" >> $INDEX_FILE
  echo "export { ${FILENAME} };" >> $INDEX_FILE
  echo >> $INDEX_FILE
done