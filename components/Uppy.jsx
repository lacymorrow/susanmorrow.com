import React from 'react'
import Uppy from '@uppy/core'
// import Tus from '@uppy/tus'
import XHRUpload from '@uppy/xhr-upload'
import { DragDrop, ProgressBar, StatusBar } from '@uppy/react'

import '@uppy/core/dist/style.min.css'
import '@uppy/drag-drop/dist/style.min.css'
import '@uppy/status-bar/dist/style.min.css'

const uppy = new Uppy({
  // restrictions: { maxNumberOfFiles: 1 },
  autoProceed: true,
	// allowMultipleUploadBatches: true,
})

// uppy.use(Tus, { endpoint: '/upload' })
uppy.use(XHRUpload, {
  endpoint: 'http://susanmorrow.us/upload.php',
})

uppy.on('complete', (result) => {
  const url = result.successful[0].uploadURL
  store.dispatch({
    type: 'SET_USER_AVATAR_URL',
    payload: { url },
  })
})

const Upload = ({ currentAvatar }) => {
  return (
    <div>
      <img src={currentAvatar} alt="Current Avatar" />
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
			<ProgressBar
				uppy={uppy}
				fixed
				hideAfterFinish
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
