var fs = require( 'fs' )
var path = require( 'path' )

/**
 * @param {string} directory
 * @returns {string[]}
 */
function getDirectoryFileListSync( directory ) {
  var directory_list = fs.readdirSync( directory )

  return directory_list.filter(
    ( item ) => {
      var stats = fs.statSync( path.join( directory, item ) )

      if ( stats.isFile() ) {
        return item
      }

      return false
    }
  )
}

module.exports = getDirectoryFileListSync