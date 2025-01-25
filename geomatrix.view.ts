namespace $.$$ {
	export class $terratensor_geomatrix extends $.$terratensor_geomatrix {

		event_submit( ) {

			const result = this.$.$terratensor_geomatrix_process.upload( {
				content: this.kml(),
				focus_mode: this.focus_mode_enebled(),
				point_in_line: Number(this.point()),
			} )

			this.download(result.file_url)
		}
	}
}
