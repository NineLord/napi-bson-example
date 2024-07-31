use std::ops::Deref;

use napi::bindgen_prelude::*;
use napi_derive::napi;
use mongodb::bson::Document;

#[napi]
pub fn get_mongo_stuff(input: Uint8Array) -> Option<Uint8Array> {
	println!("Rust got a buffer");
	match Document::from_reader(input.deref() /* convert to &[u8] */) {
		Ok(mut doc) => {
			println!("Rust deserialized doc: {}", doc);
			match doc.get_timestamp_mut("ts") {
				Ok(ts) => {
					println!("Rust got timestamp: {}", ts);
				},
				Err(error) => println!("Rust couldn't get ts field: {}", error)
			};
			match doc.insert("age", 5) {
				Some(prev_value) => println!("Rust had previously 'age' field: {}", prev_value),
				None => println!("Rust didn't had 'age' field previously")
			};
			let mut output: Vec<u8> = Vec::new();
			match doc.to_writer(&mut output) {
				Ok(_) => Some(Uint8Array::new(output)),
				Err(error) => {
					println!("Rust failed to serialize: {}", error);
					None
				}
			}
		},
		Err(error) => {
			println!("Rust failed to deserialize: {}", error);
			None
		}
	}
}