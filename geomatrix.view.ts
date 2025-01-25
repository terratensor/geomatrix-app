namespace $.$$ {
	export class $terratensor_geomatrix extends $.$terratensor_geomatrix {

		event_submit( ) {
			
			const result = this.$.$terratensor_geomatrix_process.auth( {
				content: this.kml(),
				focus_mode: true,
			} )

			this.download(result.file_url)
		}
	}
}
