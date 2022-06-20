import type { BaseSubCommand } from '../classes/Command.ts';
import { metadataHelpers, CommandLevel } from './metadata.ts';

export function SubCommand({ dependencies }: { dependencies: [string] }): ClassDecorator {
	return function(object) {
		metadataHelpers.setMetadata(object, "dependencies", dependencies);
		metadataHelpers.setMetadata(object, "level", CommandLevel.SubCommand);
	};
}