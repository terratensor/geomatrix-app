namespace $ {
	const Response = $mol_data_record({
			file_url: $mol_data_string,
			point_in_line: $mol_data_integer,
			focus_mode: $mol_data_boolean,
	})

	export class $terratensor_geomatrix_process extends $mol_object2 {
		@$mol_action
		static upload( creds: { content: string, focus_mode: boolean, point_in_line: number } ) {

			const res = this.$.$terratensor_geomatrix_transport.save(
				`upload`,
				'post',
				{ payload: creds },
			)
			const result = Response( res )

			// this.$.$hyoo_realworld_transport.token( person.file_url )

			return result
		}
	}
}
