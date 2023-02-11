const fs = require("fs"); // no change

/**
 * @Desc
 * Takes filepath and logs the contents.
 * @Params
 * filepath string
 * 
 */

//Unicode Transformation Format
//file is the parameter
function readUTF8File(filePath) {
    // callback: choice determining
    // 2 choices: data = success
    // error = failure
    // minimizes exception handling
    fs.readFile(filePath, "utf-8", (data, error) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(data);
    });
}

// Non existing file
readUTF8File("./abcd.txt");

// Existing file
readUTF8File("./static/files/testFile.txt");

// file with different encoding. will read with missing characters
readUTF8File("./static/files/testFileDifferentEncoding.txt");