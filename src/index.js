'use strict'

var fs = require( 'fs' )
var path = require( 'path' )

/**
 * @param {string} directory
 * @returns {string[]}
 */
function getDirectoryFileListSync( directory ) {
  if ( typeof directory !== 'string' || directory.length < 1 ) {
    throw new Error( 'directory must be a string with a length of at least 1' )
  }

  var directory_list = fs.readdirSync( directory )

  return directory_list.filter(
    ( item ) => {
      var stats = fs.statSync( path.join( directory, item ) )

      return stats.isFile()
    }
  )
}

module.exports = getDirectoryFileListSync
