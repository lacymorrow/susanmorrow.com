import React from 'react'
import Uppy from '@uppy/core'
// import Tus from '@uppy/tus'
import XHRUpload from '@uppy/xhr-upload'
import { DragDrop, ProgressBar, StatusBar } from '@uppy/react'

import '@uppy/core/dist/style.min.css'
import '@uppy/drag-drop/dist/style.min.css'
import '@uppy/status-bar/dist/style.min.css'

s
const uppy = new Uppy({
  // restrictions: { maxNumberOfFiles: 1 },
  autoProceed: true,
  // allowMultipleUploadBatches: true,
})

// uppy.use(Tus, { endpoint: '/upload' })
uppy.use(XHRUpload, {
  endpoint: 'https://susanmorrow.us/upload.php',
})

uppy.on('complete', (result) => {
  const fileurl = result.successful[0].uploadURL || 'file'
  console.log(fileurl)
  // sendmail([["fileurl", fileurl ]])
})

const Upload = ({ currentAvatar }) => {
  return (
    <div>
      <DragDrop
        uppy={uppy}
        locale={{
          strings: {
            // Text to show on the droppable area.
            // `%{browse}` is replaced with a link that opens the system file selection dialog.
            dropHereOr: 'Drop here or %{browse}',
            // Used as the label for the link that opens the system file selection dialog.
            browse: 'browse',
          },
        }}
      />
      <StatusBar
        uppy={uppy}
        // hideUploadButton
        hideAfterFinish={false}
        showProgressDetails
      />
    </div>
  )
}

export default Upload;
