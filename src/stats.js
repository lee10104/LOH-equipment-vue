export const statIdList = ['health', 'attack', 'defense', 'speed', 'critical_hit_rate', 'critical_hit_damage', 'debuff_rate', 'resistance'];

export function getBaseType(id) {
  if (['health', 'attack', 'defense', 'speed'].includes(id))
    return 'number';
  else
    return 'percentage';
}
